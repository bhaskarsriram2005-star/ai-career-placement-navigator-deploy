package careernavigator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/placements")
@CrossOrigin(origins = "*")
public class PlacementController {

    @Autowired
    private PlacementRepository placementRepository;

    @GetMapping
    public List<Placement> getAllPlacements() {
        return placementRepository.findAll();
    }

    @PostMapping
    public Placement addPlacement(@RequestBody Placement placement) {
        return placementRepository.save(placement);
    }

    @DeleteMapping("/{id}")
    public void deletePlacement(@PathVariable Long id) {
        placementRepository.deleteById(id);
    }
}